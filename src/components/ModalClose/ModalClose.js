import "./ModalClose.css";
import React from "react";

class Modal extends React.Component {
  confirmDel = () => {
    const { btnNumb, posts } = this.props.state;
    fetch(`https://jsonplaceholder.typicode.com/posts/${btnNumb}`, {
      method: "DELETE",
    })
      .then(() => {
        const newPostsArray = posts.filter((post) => post.id !== btnNumb);
        this.props.updatePostsArray(newPostsArray);
      })
      .then(() => {
        setTimeout(() => {
          alert(`Post ${btnNumb} been deleted succesfully!`);
        }, 400);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  noModal = () => {
    this.props.closeModal();
  };

  render() {
    return (
      <div className="modal-cont">
        <div
          className="modal-overlay"
          onClick={(event) => (!event.currentTarget ? null : this.noModal())}
        ></div>
        <div className="modal-inner">
          Are you sure about deleting ?
          <div className="btn-block">
            <button className="grn" onClick={this.confirmDel}>
              Yes,delete
            </button>
            <button className="red" onClick={this.noModal}>
              No
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
