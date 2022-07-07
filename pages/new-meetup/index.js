import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetUpForm from '../../components/meetups/NewMeetupForm';

function NewMeetUpPage() {
  const router = useRouter();

  async function addMeetupHandle(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);

    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities'
        />
      </Head>
      <NewMeetUpForm onAddMeetup={addMeetupHandle} />
    </Fragment>
  );
}

export default NewMeetUpPage;
