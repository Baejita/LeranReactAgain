import Post from "./Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";
function PostList() {
  const posts = useLoaderData();
  //เราไม่มสามารถสร้าง asyn await ตรงฟังชั่นหลักได้ ต้องใช้ useEffect ในการห่อ

  //ใช้ exsting => ในกรณีที่ขึ้นอยู่กับสถานะเก่า

  //มีอยู่สามวิธีในการสร้างเงื่อนไขคึือ 1 if 2. tertinary operations 3. ใช้ &&
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              author={post.author}
              key={post.id}
              id={post.id}
              body={post.body}
            />
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
