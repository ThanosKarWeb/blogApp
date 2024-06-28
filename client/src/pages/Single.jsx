import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1719405889479-7ea7b2be7317?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="user">
          <img
            src="https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=2">
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sed
          aut ullam. Et non, cupiditate necessitatibus nisi nemo iure esse nam
          doloribus perferendis aliquid eius dolorem voluptatum veniam, cumque
          pariatur autem accusantium doloremque sapiente. Eligendi nesciunt
          excepturi cumque delectus dicta at cum ipsam omnis recusandae quia
          eveniet nisi atque, expedita dignissimos blanditiis similique quaerat.
          Ipsa fugiat et quos repellat id. Consequatur voluptatum cum quisquam
          non voluptatem nulla quia, amet eaque dignissimos cumque adipisci
          delectus error omnis eum quis asperiores id distinctio numquam
          exercitationem voluptates assumenda tempora molestias voluptatibus!
          Doloremque sapiente deleniti iusto culpa aspernatur neque cupiditate
          debitis maiores voluptate provident!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sed
          aut ullam. Et non, cupiditate necessitatibus nisi nemo iure esse nam
          doloribus perferendis aliquid eius dolorem voluptatum veniam, cumque
          pariatur autem accusantium doloremque sapiente. Eligendi nesciunt
          excepturi cumque delectus dicta at cum ipsam omnis recusandae quia
          eveniet nisi atque, expedita dignissimos blanditiis similique quaerat.
          Ipsa fugiat et quos repellat id. Consequatur voluptatum cum quisquam
          non voluptatem nulla quia, amet eaque dignissimos cumque adipisci
          delectus error omnis eum quis asperiores id distinctio numquam
          exercitationem voluptates assumenda tempora molestias voluptatibus!
          Doloremque sapiente deleniti iusto culpa aspernatur neque cupiditate
          debitis maiores voluptate provident!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sed
          aut ullam. Et non, cupiditate necessitatibus nisi nemo iure esse nam
          doloribus perferendis aliquid eius dolorem voluptatum veniam, cumque
          pariatur autem accusantium doloremque sapiente. Eligendi nesciunt
          excepturi cumque delectus dicta at cum ipsam omnis recusandae quia
          eveniet nisi atque, expedita dignissimos blanditiis similique quaerat.
          Ipsa fugiat et quos repellat id. Consequatur voluptatum cum quisquam
          non voluptatem nulla quia, amet eaque dignissimos cumque adipisci
          delectus error omnis eum quis asperiores id distinctio numquam
          exercitationem voluptates assumenda tempora molestias voluptatibus!
          Doloremque sapiente deleniti iusto culpa aspernatur neque cupiditate
          debitis maiores voluptate provident!
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
