import { Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useState } from "react";
import './page.css';
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Management() {
    const [dataInput, setDataInput] = useState({
        occupation: 'Skilled Manual',
        maritalStatus: 'Married',
        homeOwner: 'No',
        Gender: 'Male',
        cars: '',
        income: '',
        commuteDistance: '0-1 Miles',
        children: '',
        region: 'Europe',
        education: 'Bachelors',
        Age: ''
    });

    // const [errors, setErrors] = useState({
    //     cars: '',
    //     income: '',
    //     children: '',
    //     age: ''
    // })

    // const predict = () => {
    //     setErrors({
    //         cars: '',
    //         income: '',
    //         children: '',
    //         age: ''
    //     });

    //     if(dataInput.cars === ''){
    //     }
    //     if(dataInput.income === ''){setErrors({...errors, income: 'This field has to be fill'})}
    //     if(dataInput.children === ''){setErrors({...errors, children: 'This field has to be fill'})}
    //     if(dataInput.age === ''){setErrors({...errors, Age: 'This field has to be fill'})}

    //     console.log(dataInput);
    // setDataInput({
    //     occupation: 'Skilled Manual',
    //     maritalStatus: 'Married',
    //     homeOwner: 'No',
    //     Gender: 'Male',
    //     cars: '',
    //     income: '',
    //     commuteDistance: '0-1 Miles',
    //     children: '',
    //     region: 'Europe',
    //     education: 'Bachelors',
    //     Age: ''
    // })
    // }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data.cars);
        // setDataInput({...dataInput, cars: Number(data.cars) });
        console.log({
            ...dataInput,
            cars: Number(data.cars),
            income: Number(data.income),
            children: Number(data.children),
            Age: Number(data.age)
        });
        let url = '';
        axios.post(url, {
            data: {
                ...dataInput,
                cars: Number(data.cars),
                income: Number(data.income),
                children: Number(data.children),
                Age: Number(data.age)
            }
        })
    }

    return (
        <Container>
            <h1 style={{ textAlign: "center", color: "black" }}>STORE MANAGEMENT</h1>
            <hr style={{ marginBottom: '30px', width: "200px", height: "1px", backgroundColor: "#f4511e" }} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="occupation-label" color='warning'>Occupation</InputLabel>
                            <Select
                                color='warning'
                                labelId="occupation-label"
                                name="occupation"
                                value={dataInput.occupation}
                                label="Occupation"
                                onChange={(e) => setDataInput({ ...dataInput, occupation: e.target.value })}
                            >
                                <MenuItem value={'Skilled Manual'}>Skilled Manual</MenuItem>
                                <MenuItem value={'Clerical'}>Clerical</MenuItem>
                                <MenuItem value={'Professional'}>Professional</MenuItem>
                                <MenuItem value={'Manual'}>Manual</MenuItem>
                                <MenuItem value={'Management'}>Management</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="marital-status-label" color='warning'>Marital Status</InputLabel>
                            <Select
                                color='warning'
                                labelId="marital-status-label"
                                name="maritalStatus"
                                value={dataInput.maritalStatus}
                                label="Marital Status"
                                onChange={(e) => setDataInput({ ...dataInput, maritalStatus: e.target.value })}
                            >
                                <MenuItem value={'Married'}>Married</MenuItem>
                                <MenuItem value={'Single'}>Single</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <FormControlLabel control={
                            <Checkbox checked={(dataInput.homeOwner === 'Yes') ? true : false}
                                onChange={(e) => setDataInput({ ...dataInput, homeOwner: e.target.checked ? 'Yes' : 'No' })} color='warning' />} label="Home Owner" />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <FormControl fullWidth>
                            <InputLabel id="gender-label" color='warning'>Gender</InputLabel>
                            <Select
                                color='warning'
                                labelId="gender-label"
                                name="gender"
                                value={dataInput.Gender}
                                label="Marital Status"
                                onChange={(e) => setDataInput({ ...dataInput, Gender: e.target.value })}
                            >
                                <MenuItem value={'Male'}>Male</MenuItem>
                                <MenuItem value={'Female'}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <TextField
                            // value={dataInput.cars} onChange={(e) => setDataInput({ ...dataInput, cars: Number(e.target.value) })}
                            color='warning' type='number' fullWidth label="Cars" name='cars'
                            {...register("cars", { required: "Required" })}
                            error={!!errors?.cars}
                            helperText={errors?.cars ? errors.cars.message : null}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            color='warning' type='number' fullWidth label="Income" name="income"
                            {...register("income", { required: "Required" })}
                            error={!!errors?.income}
                            helperText={errors?.income ? errors.income.message : null}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="commute-distance" color='warning'>Commute Distance</InputLabel>
                            <Select
                                color='warning'
                                labelId="commute-distance"
                                name="commuteDistance"
                                value={dataInput.commuteDistance}
                                label="Commute Distance"
                                onChange={(e) => setDataInput({ ...dataInput, commuteDistance: e.target.value })}
                            >
                                <MenuItem value={'0-1 Miles'}>0-1 Miles</MenuItem>
                                <MenuItem value={'1-2 Miles'}>1-2 Miles</MenuItem>
                                <MenuItem value={'2-5 Miles'}>2-5 Miles</MenuItem>
                                <MenuItem value={'5-10 Miles'}>5-10 Miles</MenuItem>
                                <MenuItem value={'10+ Miles'}>10+ Miles</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            // value={dataInput.children} onChange={(e) => setDataInput({ ...dataInput, children: Number(e.target.value) })}
                            color='warning' type='number' fullWidth label="Children" name="children"
                            {...register("children", { required: "Required" })}
                            error={!!errors?.children}
                            helperText={errors?.children ? errors.children.message : null}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="region-label" color='warning'>Region</InputLabel>
                            <Select
                                color='warning'
                                labelId="region-label"
                                name="region"
                                value={dataInput.region}
                                label="Region"
                                onChange={(e) => setDataInput({ ...dataInput, region: e.target.value })}
                            >
                                <MenuItem value={'Europe'}>Europe</MenuItem>
                                <MenuItem value={'Pacific'}>Pacific</MenuItem>
                                <MenuItem value={'North America'}>North America</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="education-label" color='warning'>Education</InputLabel>
                            <Select
                                color='warning'
                                labelId="education-label"
                                name="education"
                                value={dataInput.education}
                                label="Education"
                                onChange={(e) => setDataInput({ ...dataInput, education: e.target.value })}
                            >
                                <MenuItem value={'Bachelors'}>Bachelors</MenuItem>
                                <MenuItem value={'Partial College'}>Partial College</MenuItem>
                                <MenuItem value={'High School'}>High School</MenuItem>
                                <MenuItem value={'Partial High School'}>Partial High School</MenuItem>
                                <MenuItem value={'Graduate Degree'}>Graduate Degree</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            // value={dataInput.Age} onChange={(e) => setDataInput({ ...dataInput, Age: Number(e.target.value) })}
                            color="warning" type='number' fullWidth label="Age" name="age"
                            {...register("age", { required: "Required" })}
                            error={!!errors?.age}
                            helperText={errors?.age ? errors.age.message : null}
                        />
                    </Grid>
                </Grid>
                <Button type='submit' style={{ marginTop: '40px', backgroundColor: '#f4511e' }} variant="contained" id='predict-button'>Predict</Button>
            </form>

        </Container>
    )
}
