import { Autocomplete, Stack, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import './Tags.css';

const SearchTagsCopy = (props) => {
  let allTags = useSelector((state) => state?.languageSlice?.tags?.data);
  let arrTag = allTags?.map((tag) => tag?.tag);
  const { setFormValues, formValues, tutorial } = props;
  const { tags } = formValues;

  return (
    <>
      <Stack
        style={{ marginLeft: '0vw' }}
        className='tags'
        spacing={2}
        // width='50vw'
      >
        <Autocomplete
          multiple
          options={arrTag ? arrTag : []}
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
