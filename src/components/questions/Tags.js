import { Autocomplete, Stack, TextField } from '@mui/material';
import './Tags.css';

const SearchTagsCopy = (props) => {
  const { setFormValues, formValues, tutorial } = props;
  const { tags } = formValues;
  const allTags = [
    'Javascript',
    'Python',
    '.NET',
    'C#',
    'C++',
    'Solidity',
    'PHP',
  ];

  return (
    <>
      <Stack
        style={{ marginLeft: '0vw' }}
        className='tags'
        spacing={2}
        width='50vw'
      >
        <Autocomplete
          multiple
          options={allTags}
          renderInput={(params) => <TextField {...params} label='Tags' />}
          value={tags}
          onChange={(event, newValue) =>
            setFormValues({ ...formValues, tags: newValue })
          }
        />
      </Stack>
    </>
  );
};

export default SearchTagsCopy;
