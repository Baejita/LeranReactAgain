import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";
function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  //ใช้ exsting => ในกรณีที่ขึ้นอยู่กับสถานะเก่า

  //มีอยู่สามวิธีในการสร้างเงื่อนไขคึือ 1 if 2. tertinary operations 3. ใช้ &&
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onClose={onStopPosting} addPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, i) => (
            <Post author={post.author} key={i} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p> Stat adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
