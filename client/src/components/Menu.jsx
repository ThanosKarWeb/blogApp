function Menu() {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, possimus!",
      img: "https://images.unsplash.com/photo-1719405889479-7ea7b2be7317?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, possimus!",
      img: "https://images.unsplash.com/photo-1719405889479-7ea7b2be7317?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, possimus!",
      img: "https://images.unsplash.com/photo-1719405889479-7ea7b2be7317?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
