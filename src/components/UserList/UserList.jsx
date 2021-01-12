import s from './UserList.module.css';
import Button from '../Button';

export default function UserList({ data, onDelete }) {
  function handleDelete(e) {
    onDelete(e.target.dataset.id);
  }

  return (
    <table className={s.table}>
      <thead className={s.tHead}>
        <tr className={s.tR}>
          <td className={s.tD}>User Name</td>
          <td className={s.tD}>Email</td>
          <td className={s.tD}>Delete</td>
        </tr>
      </thead>
      <tbody className={s.tBody}>
        {data.map(user => {
          return (
            <tr key={user.id}>
              <td className={s.tD}>{user.login}</td>
              <td className={s.tD}>{user.email}</td>
              <td className={s.tD}>
                <Button onClick={handleDelete} title="X" id={user.id} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
