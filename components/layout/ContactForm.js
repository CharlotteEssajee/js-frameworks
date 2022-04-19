import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("Please enter your firstname")
    .min(3, "Firstname must be at least 3 characters"),
  lastname: yup
    .string()
    .required("Please enter your lastname")
    .min(4, "Lastname must be at least 4 characters"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="mb-0">
        Enter your firstname<span className="text-danger"> *</span>
      </label>
      <br></br>
      {errors.firstname && <span>{errors.firstname.message}</span>}
      <input className="form-control" {...register("first")} />

      <label className="mb-0">
        Enter your lastname<span className="text-danger"> *</span>
      </label>
      <br></br>
      {errors.lastname && <span>{errors.lastname.message}</span>}
      <input className="form-control" {...register("lastname")} />

      <label className="mb-0">
        Enter your email address<span className="text-danger"> *</span>
      </label>
      <br></br>
      {errors.email && <span>{errors.email.message}</span>}
      <input className="form-control" {...register("email")} />

      <label className="mb-0">
        Subject<span className="text-danger"> *</span>
      </label>
      <select className="form-select" {...register("subject")}>
        <option selected>What can we help you with?</option>
        <option value="customer service">Customer service</option>
        <option value="shipping">Shipping</option>
      </select>

      <label className="mb-0">
        Enter your message<span className="text-danger"> *</span>
      </label>
      <br></br>
      <textarea className="form-control" {...register("message")} />
      {errors.message && <span>{errors.message.message}</span>}

      <button className="btn btn-secondary">Send</button>
    </form>
  );
}

export default ContactForm;
