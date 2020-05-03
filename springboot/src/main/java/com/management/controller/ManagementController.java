package com.management.controller;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.management.domain.ManagementDTO;
import com.management.service.ManagementService;
import com.management.util.UploadFileUtils;

@RestController
@RequestMapping("api")
public class ManagementController {
	@Autowired
	private ManagementService managementService;
	
	@GetMapping(value = "/customers") 
	public Map<String, Object> getManagementList() {
		List<ManagementDTO> customers = managementService.getManagementList();
		Map<String, Object> map = new HashMap<>();
		map.put("data", customers);
		return map; 
	}
	@PostMapping(value = "/customers", headers = "content-type=multipart/form-data")
	public void customersAdd(@RequestParam Map<String, Object> param,
			@RequestPart("image") List<MultipartFile> files) throws Exception {
		ManagementDTO dto = new ManagementDTO();
		String name = (String) param.get("name");
		String birthday = (String) param.get("birthday");
		String gender = (String) param.get("gender");
		String job = (String) param.get("job");
		
		dto.setName(name);
		dto.setBirthday(birthday);
		dto.setGender(gender);
		dto.setJob(job);
		
		for(MultipartFile file : files) {
			//String savedName = uploadFile(file.getOriginalFilename(), file.getBytes());
			String savedName = UploadFileUtils.uploadFile("src/main/resources/static/upload/", file.getOriginalFilename(), file.getBytes());
			//String savedName = UploadFileUtils.uploadFile("home/upload/", file.getOriginalFilename(), file.getBytes());
			System.out.println("===========");
			dto.setImage("upload/"+savedName);
		}
		managementService.customerAdd(dto);
	}
	
//	private String uploadFile(String originalName, byte[] fileData) throws Exception {
//		// uuid 생성
//		UUID uuid = UUID.randomUUID();
//		// 랜덤생성+파일이름 저장
//		String savedName = uuid.toString()+"_"+originalName;
//		File target = new File("src/main/resources/static/upload/", savedName);
//		// 임시디렉토리에 저장된 업로드된 파일을 지정된 디렉토리로 복사
//		FileCopyUtils.copy(fileData, target);
//		
//		
//		return savedName;
//	}
	
	@RequestMapping(value = "customers/{id}", method = RequestMethod.DELETE)
	public void customerDelete(@PathVariable("id") Long id) {
		managementService.deleteManagement(id);
	}
	
}
