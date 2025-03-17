package chapter6.beans;

import java.io.Serializable;
import java.util.Date;

public class Message implements Serializable {

    private int id;
    private int userId;
    private String text;
    private Date createdDate;
    private Date updatedDate;

    // getter/setterは省略されているので、自分で記述しましょう。
    public void setId(int id) {
    	this.id = id;
    }
    public void setUserId(int userId) {
    	this.userId = userId;
    }
    public void setText(String text) {
    	this.text = text;
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
    public int getUserId() {
    	return userId;
    }
    public String getText() {
    	return text;
    }
    public Date getCreatedDate() {
    	return createdDate;
    }
    public Date getUpdatedDate() {
    	return updatedDate;
    }
}