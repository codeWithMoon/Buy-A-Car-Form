import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm({ name: "", email: "", contectNumber: "", dateOfBirth: "", services: "", age: "" });

    const survey = (data) => {
        //event.preventDefault();
        console.log(data);
        /* setUser([...user, { name: newUser.name, email: newUser.email, contectNumber: newUser.contectNumber, dateOfBirth: newUser.dateOfBirth, age: newUser.age, services: newUser.services, cnicNumber: newUser.cnicNumber, userRecomanded: newUser.userRecomanded }]);
         console.log(user, newUser);*/
    };

    return (
        <div className="container">
            <h1 className="text-center mt-2">By your own Car</h1>
            <h5 className="text-center mt-1">Than you for giving us yours time to fill the Survey, this will help us to improve ours survices.</h5>
            <br />
            <form onSubmit={handleSubmit(survey)}>
                <div className="row">
                    <div className="col-4">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input id="name" className="form-control" type="text" placeholder="Enter Your Name" {...register("name", { required: "user Name is required", minLength: { value: 3, message: "must be 4 words" }, maxLength: 20, pattern: { value: /[A-Za-z]\D/g, message: "must be chartacter" } })} /><p>{errors.name?.message}</p>
                    </div>
                    <div className="col-4">
                        <label className="form-label" htmlFor="email">E-mail</label>
                        <input id="email" className="form-control" type="email" {...register("email", { required: "Email is required" })} placeholder="Enter Your E-mail Address" /><p>{errors.email?.message}</p>
                    </div>
                    <div className="col-4">
                        <label className="form-label" htmlFor="age">Age</label>
                        <input id="age" className="form-control" type="number" placeholder="Enter your Age" {...register("age", { min: { value: 17, message: "Must be older then 17 years" }, max: 80, required: "Age required", valueAsNumber: true })} /><p>{errors.age?.message}</p>
                    </div>
                    <div className="col-4">
                        <label className="form-label" htmlFor="contectNumber">Mobile Number</label>
                        <input id="contectNumber" className="form-control" type="text" placeholder="Enter Your Mobile number" {...register("contectNumber", { pattern: { value: /^((00923)|(03))[0-4][0-9]-?\d{7}$/g, message: "Enter valid Mobile number used in Pakistan" } })} /><p>{errors.contectNumber?.message}</p>
                    </div>
                    <div className="col-4">
                        <label className="form-label" htmlFor="dateOfBirth">Date of Birth</label>
                        <input id="dateOfBirth" className="form-control" type="date" {...register("dateOfBirth", { valueAsDate: true, min: "1950-01-01", max: "2021-12-31" })} placeholder="Enter Your Date of Birth" />
                    </div>{errors?.dateOfBirth?.message}
                    <div className="col-4">
                        <label className='form-label' htmlFor="services">Which Services do you prefer</label>
                        <select className="form-select" id="services" {...register("services")} arial-label="Default select example" >
                            <option value="repairs" defaultValue>Reparing</option>
                            <option value="decoration">Decoration</option>
                            <option value="tune">Tuning</option>
                            <option value="body-work" >Body Work</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <button className="btn btn-danger mt-2" type="submit" >Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}