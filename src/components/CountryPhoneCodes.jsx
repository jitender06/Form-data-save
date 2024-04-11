import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Grid, FormControl, MenuItem, Select } from '@mui/material';


const CountryPhoneCodes = ({data, handleChange}) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountryData(response.data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountryData();
  }, []);

  return (
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
                {
                  countryData?.map((country) => (
                    <MenuItem value={country?.idd?.root + country?.idd?.suffixes?.[0]}>{country?.idd?.root}{country?.idd?.suffixes?.[0]}</MenuItem>
                  ))
                }
              </Select>
          </FormControl>
          <TextField id="standard-basic" type='number' variant="outlined" size='small' value={data?.contactNumber} onChange={(e) => handleChange("contactNumber",e.target.value)}/>

          </Box>
      </Box>
    </Grid>
  );
};

export default CountryPhoneCodes;
