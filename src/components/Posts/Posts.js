import "./Posts.css";
import React from "react";
import Spinner from "../Spinner/Spinner";
import Modal from "../ModalClose/ModalClose";
import ModalEdit from "../ModalEdit/ModalEdit";

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      modal: false,
      modalEdit: false,
      btnNumb: null,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }));
  }
  updatePostsArray = (newPostsArray) => {
    this.setState({ posts: newPostsArray, modal: false });
  };
  closeModal = () => {
    this.setState({ modal: false, modalEdit: false });
  };
  deletePost = (item) => {
    this.setState({ modal: true, btnNumb: item.id });
  };
  editPost = (item) => {
    this.setState({ modalEdit: true, btnNumb: item.id });
  };
  render() {
    return (
      <div>
        {this.state.modalEdit && (
          <ModalEdit state={this.state} closeModal={this.closeModal} />
        )}
        {this.state.modal && (
          <Modal
            state={this.state}
            updatePostsArray={this.updatePostsArray}
            closeModal={this.closeModal}
          />
        )}
        {this.state.posts.length ? (
          this.state.posts.map((item) => {
            return (
              <div key={item.id} className="inner-box">
                <div className="sign-box">
                  <div
                    className="edit-sign"
                    onClick={() => this.editPost(item)}
                  >
                    &#9998;
                  </div>
                  <div
                    className="cross-sign"
                    onClick={() => this.deletePost(item)}
                  >
                    &#x274C;
                  </div>
                </div>
                <h1>{item.title}</h1>
                <h2>{item.body}</h2>
                <p className="id">{item.id}</p>
              </div>
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default Posts;
