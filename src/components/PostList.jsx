import { useEffect, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";
function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  //เราไม่มสามารถสร้าง asyn await ตรงฟังชั่นหลักได้ ต้องใช้ useEffect ในการห่อ

  useEffect(() => {
    async function getPost() {
      const response = await fetch("http://localhost:8080/posts");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.posts);
      setPosts(data.posts);
    }
    getPost();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" },
    });

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
