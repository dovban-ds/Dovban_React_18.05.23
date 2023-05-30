import "./ModalEdit.css";
import React from "react";

class ModalEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      bodyValue: "",
    };
  }
  confirmEdit = () => {
    const { btnNumb, posts } = this.props.state;
    const { titleValue, bodyValue } = this.state;

    const requestBody = {};
    if (titleValue !== "") {
      requestBody.title = titleValue;
    }
    if (bodyValue !== "") {
      requestBody.body = bodyValue;
    }

    if (Object.keys(requestBody).length === 0) {
      alert("Nothing to confirm");
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${btnNumb}`, {
      method: "PATCH",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((editedPost) => {
        const obj = posts.filter((item) => item.id === btnNumb);
        if (titleValue !== "") {
          obj[0].title = editedPost.title;
        }
        if (bodyValue !== "") {
          obj[0].body = editedPost.body;
        }
        this.props.closeModal();
      })
      .then(() => {
        setTimeout(() => {
          alert(`Post ${btnNumb} has been edited successfully!`);
        }, 400);
      })
      .catch((error) => {
        console.error("Error editing post:", error);
      });
  };

  noModal = () => {
    this.props.closeModal();
  };
  handleChange = (event, field) => {
    this.setState({
      [field]: event.target.value,
    });
  };
  render() {
    return (
      <div className="modal-cont">
        <div
          className="modal-overlay"
          onClick={(event) => (!event.currentTarget ? null : this.noModal())}
        ></div>
        <div className="modal-inner">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.titleValue}
            onChange={(event) => this.handleChange(event, "titleValue")}
          />
          <label htmlFor="body">Body:</label>
          <input
            type="text"
            name="body"
            id="body"
            value={this.state.bodyValue}
            onChange={(event) => this.handleChange(event, "bodyValue")}
          />
          <div className="btn-block">
            <button className="grn" onClick={this.confirmEdit}>
              Confirm
            </button>
            <button className="red" onClick={this.noModal}>
              Discard
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalEdit;
