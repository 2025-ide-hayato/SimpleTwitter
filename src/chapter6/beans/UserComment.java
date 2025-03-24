package chapter6.beans;

import java.io.Serializable;
import java.util.Date;

public class UserComment implements Serializable {

	private int id;
	private String account;
	private String name;
	private int messageId;
	private String text;
	private Date createdDate;

	// getter/setterは省略されているので、自分で記述しましょう。
	public void setId(int id) {
		this.id = id;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setMessageId(int messageId) {
		this.messageId = messageId;
	}

	public void setText(String text) {
		this.text = text;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public int getId() {
		return id;
	}

	public String getAccount() {
		return account;
	}

	public String getName() {
		return name;
	}

	public int getMessageId() {
		return messageId;
	}

	public String getText() {
		return text;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

}