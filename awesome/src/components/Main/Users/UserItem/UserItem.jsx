import s from "./UserItem.module.css";

const UserItem = ({ name, username, id, email, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className={s.userItem}>
      <div>
        <img
          className={s.img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRwZsyf5DxP_1f2efMNz_jBvlAeytorE4Ac65wwMk3jsPl8M68875c3VNwCZPRfVPCWuo&usqp=CAU"
          alt="image"
        />
      </div>
      <div className={s.userInfo}>
        <p className={s.name}> {name} </p>
        <p className={s.userName}> email : {email}</p>
      </div>
      <div className={s.buttons}>
        {/* <button className={s.btn}>edit</button> */}
        <button onClick={handleDelete} className={s.btn}>
          delete user
        </button>
      </div>
    </div>
  );
};

export default UserItem;
