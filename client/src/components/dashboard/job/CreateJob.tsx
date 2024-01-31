'use client';
import { CustomTextField } from '@/components/missilenious/TextFieldItems';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import 'react-quill/dist/quill.snow.css';

const CreateJob = () => {
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  );
  const { data: session } = useSession();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [engagement, setEngagement] = useState('FULLTIME');
  const [locationType, setLocation] = useState('ONSITE');
  const [jobType, setJob] = useState('PERMANENT');
  const [expiresAt, setExpiresAt] = useState(dayjs(Date.now()));
  const [error, setError] = useState('');

  const handleChangeLocation = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  };

  const handleChangeJobType = (e) => {
    e.preventDefault();
    setJob(e.target.value);
  };

  const handleChangeEngagement = (e) => {
    e.preventDefault();
    setEngagement(e.target.value);
  };

  const myDate = () => {
    const newDate = dayjs(expiresAt).format('MM/DD/YYYY');
    return new Date(newDate);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      jobType,
      locationType,
      engagement,
      description,
      expiresAt: myDate(),
      userId: session?.userId,
    };
    fetch('/api/job/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          window.location.replace('/dashboard');
        } else {
          setError('An Error occured saving data to the database');
        }
      })
      .catch((err) => setError('Unable to connect to database'));
  };
  return (
    <Box
      sx={{
        mt: '5%',
        mx: '4%',
      }}
    >
      {error && (
        <Box
          sx={{
            backgroundColor: 'red',
            mx: '2rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontSize: '0.8rem',
            }}
          >
            {error}
          </Typography>
        </Box>
      )}
      <form onSubmit={handleSubmit}>
        <CustomTextField
          variant="outlined"
          fullWidth
          type="text"
          placeholder="Job Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormControl
          fullWidth
          sx={{
            marginBottom: '1rem',
          }}
        >
          <InputLabel id="location">Location</InputLabel>
          <Select
            labelId="location"
            id="location-select"
            value={locationType}
            label="Apply as"
            onChange={handleChangeLocation}
          >
            <MenuItem value={'HYBRID'}>Hybrid</MenuItem>
            <MenuItem value={'ONSITE'}>OnSite</MenuItem>
            <MenuItem value={'REMOTE'}>Remote</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          sx={{
            marginBottom: '1rem',
          }}
        >
          <InputLabel id="jobType">Job Type</InputLabel>
          <Select
            labelId="jobType"
            id="jobType-select"
            value={jobType}
            label="Job Type"
            onChange={handleChangeJobType}
          >
            <MenuItem value={'PERMANENT'}>Permanent</MenuItem>
            <MenuItem value={'TEMPORARY'}>Temporary</MenuItem>
            <MenuItem value={'CONTRACT'}>Contract</MenuItem>
            <MenuItem value={'INTERNSHIP'}>Internship</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          sx={{
            marginBottom: '1rem',
          }}
          variant="outlined"
        >
          <InputLabel id="engagement">Engagement</InputLabel>
          <Select
            labelId="engagement"
            id="engagement-select"
            value={engagement}
            label="Engagement"
            onChange={handleChangeEngagement}
          >
            <MenuItem value={'FULLTIME'}>FullTime</MenuItem>
            <MenuItem value={'PARTTIME'}>PartTime</MenuItem>
            <MenuItem value={'PIECEWORK'}>PieceWork</MenuItem>
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Application Deadline"
              value={expiresAt}
              onChange={(newValue) => setExpiresAt(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: 'gray',
              fontSize: '0.8rem',
              mt: '2rem',
            }}
          >
            Enter Details
          </Typography>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
          />
        </Box>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CreateJob;
