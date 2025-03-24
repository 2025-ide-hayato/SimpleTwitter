package chapter6.beans;

import java.io.Serializable;
import java.util.Date;

public class Comment implements Serializable {

	private int id;
	private String text;
	private int userId;
	private int messageId;
	private Date createdDate;
	private Date updatedDate;

	// getter/setterは省略されているので、自分で記述しましょう。
	public void setId(int id) {
		this.id = id;
	}

	public void setText(String text) {
		this.text = text;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public void setMessageId(int messageId) {
		this.messageId = messageId;
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

	public String getText() {
		return text;
	}

	public int getUserId() {
		return userId;
	}

	public int getMessageId() {
		return messageId;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}
}