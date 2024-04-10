import React, { useState } from 'react'
import { Box, Container, Typography, TextField, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, MenuItem, Select } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function Form() {
    // for storing the data of form
    const [data, setData] = useState({
        name:"",
        contactNumber:"",
        contactCode:"",
        otp:"",
        email:"",
        dob:null,
        pob:"",
        gender:"",
    });

    // on click of save button the data is saving in [save] state 
    const [save, setsave] = useState([])

    const handleChange = (key, value) => {
        setData((prevData) =>({
            ...prevData,
            [key]: value
        }))
    }

    const saveData = () => {
        setsave([...save, data]);
        setData({
            name:"",
            contactNumber:"",
            contactCode:"",
            otp:"",
            email:"",
            dob:null,
            pob:"",
            gender:"",
        })
    }

    console.log(data,"see-data");
    console.log(save,"see-all-save-data");

  return (
    <Container maxWidth="md">
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography py={8} textAlign={"center"} variant="body1" sx={{color:"purple"}}>Create Your Account With Divine Connection</Typography>
            </Grid>

            <Grid item xs={12}>
                <Box display={"flex"} alignItems={"end"} gap={2}>
                    <Typography variant="body1" color="initial">Name: </Typography>
                    <TextField id="standard-basic" variant="outlined" size='small' value={data?.name} onChange={(e) => handleChange("name",e.target.value)}/>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box display={"flex"} alignItems={"end"} gap={2}>
                    <Typography variant="body1" color="initial">Contact No: </Typography>
                    <Box>
                    <FormControl variant="outlined" size='small'>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={data?.contactCode} 
                        onChange={(e) => handleChange("contactCode",e.target.value)}
                        >
                        <MenuItem value={"+91"}>+91</MenuItem>
                        <MenuItem value={"+1"}>+1</MenuItem>
                        <MenuItem value={"+44"}>+44</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="standard-basic" type='number' variant="outlined" size='small' value={data?.contactNumber} onChange={(e) => handleChange("contactNumber",e.target.value)}/>

                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box display={"flex"} alignItems={"end"} gap={2}>
                    <Typography variant="body1" color="initial">OTP: </Typography>
                    <TextField id="standard-basic" variant="outlined" size='small' value={data?.otp} onChange={(e) => handleChange("otp",e.target.value)}/>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box display={"flex"} alignItems={"end"} gap={2}>
                    <Typography variant="body1" color="initial">E-Mail: </Typography>
                    <TextField id="standard-basic" variant="outlined" size='small' value={data?.email} onChange={(e) => handleChange("email",e.target.value)}/>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box display={"flex"} alignItems={"end"} gap={2}>
                    <Typography variant="body1" color="initial">Date Of Birth: </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker value={dayjs(data?.dob)}
                            onChange={(newValue) => handleChange('dob', newValue.$d)}
                            renderInput={(params) => <TextField {...params} />} label="Basic date picker" />
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box display={"flex"} alignItems={"end"} gap={2}>
                    <Typography variant="body1" color="initial">Place Of Birth: </Typography>
                    <FormControl sx={{minWidth: 200}} size='small'>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={data?.pob} 
                            onChange={(e) => handleChange("pob",e.target.value)}
                        >
                            <MenuItem value={10}>Punjab</MenuItem>
                            <MenuItem value={20}>Rajasthan</MenuItem>
                            <MenuItem value={30}>Haryana</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>

            <Grid item xs={12} display={"flex"} alignItems={"center"} gap={2}>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={data?.gender}
                        onChange={(event) => handleChange('gender', event.target.value)}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
            </Grid>

            <Grid item xs={12} display={"flex"} justifyContent={"center"} gap={3} mt={5}>
                <Button variant="contained"  sx={{
                    background: "purple",
                    px: 8,
                    "&:hover": {
                    backgroundColor: "purple",
                    }
                }}
                onClick={saveData}
                >Save</Button>

                <Button variant="contained"  sx={{
                    background: "purple",
                    px: 8,
                    "&:hover": {
                    backgroundColor: "purple",
                    }
                }}>Edit</Button>
            </Grid>

            
        </Grid>
    </Container>
  )
}
