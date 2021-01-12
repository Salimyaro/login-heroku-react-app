import s from './SignInForm.module.css';
import { useForm } from 'react-hook-form';

export default function SignInForm({ onSubmit }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmitForm = ({ email, pass }) => {
    onSubmit({
      email,
      pass,
    });
  };

  return (
    <>
      <div className={s.searchbar}>
        <form className={s.searchForm} onSubmit={handleSubmit(onSubmitForm)}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>
          <div>
            <input
              ref={register({
                required: 'You must specify a email',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Email is not valid.',
                },
              })}
              name="email"
              className={s.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Email"
            />
            <input
              ref={register({
                required: 'You must specify a password',
                minLength: {
                  value: 8,
                  message:
                    'Password must have at least 8 characters and should contain at least one uppercase letter, lowercase letter, digit, and special symbol',
                },
                pattern: {
                  value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$%^&()`~=+/?|'"*])/,
                  message:
                    'Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol',
                },
              })}
              name="pass"
              className={s.input}
              type="password"
              autoComplete="off"
              placeholder="Password"
            />
          </div>
        </form>
      </div>
      {errors.email && <span>{errors.email.message}</span>}
      {errors.pass && <span>{errors.pass.message}</span>}
    </>
  );
}
