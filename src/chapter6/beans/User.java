package chapter6.beans;

import java.io.Serializable;
import java.util.Date;

public class User implements Serializable {

    private int id;
    private String account;
    private String name;
    private String email;
    private String password;
    private String description;
    private Date createdDate;
    private Date updatedDate;
    
	public void setId(int id) {
		this.id = id;
	}
    
	public void setName(String name) {
		this.name = name;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}
	
	public int getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}
	public String getAccount() {
		return account;
	}
	public String getPassword() {
		return password;
	}
	public String getEmail() {
		return email;
	}
	public String getDescription() {
		return description;
	}
	public Date getCreatedDate() {
		return createdDate;
	}
	public Date getUpdatedDate() {
		return updatedDate;
	}

}
