import './App.css';
import Header from './layout/Header';
import AllQuestions from './components/questions/AllQuestions';
import AskQuestion from './components/questions/AskQuestion';
import Signup from './registration/Signup';
import { Routes, Route } from 'react-router-dom';
import Signin from './registration/Signin';
import Error404 from './components/error/Error404';
import { browserRoutes } from './routes/browserRoutes';
import AuthRoutes from './components/authProtectedRoutes/AuthRoutes';
import { Toaster } from 'react-hot-toast';
import Profile from './profile/Profile';
import MyQuestions from './profile/MyQuestions';
import MyAnswers from './profile/MyAnswers';
import QuestionDetails from './components/questions/QuestionDetails';
import Write from './components/write/Write';
import Tutorial from './components/write/Tutorial';
import Settings from './components/settings/Settings';
import ProtectedRoutes from './components/authProtectedRoutes/ProtectedRoutes';
import UserList from './userList/UserList';
import User from './user/User';

function App() {
  return (
    <>
      <Toaster position='bottom-center' />
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path={browserRoutes.HOME} element={<AllQuestions />} />
          <Route
            path={browserRoutes.ASK_QUESTIONS}
            element={
              <ProtectedRoutes redirectLink={browserRoutes.SIGNIN}>
                <AskQuestion />
              </ProtectedRoutes>
            }
          />
          <Route path={browserRoutes.SIGNUP} element={<Signup />} />
          <Route path={browserRoutes.USERSLIST} element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route
            path={browserRoutes.SIGNIN}
            element={
              <AuthRoutes redirectLink={browserRoutes.HOME}>
                <Signin />
              </AuthRoutes>
            }
          />
          <Route path={browserRoutes.PROFILE} element={<Profile />} />
          <Route path={browserRoutes.MYQUESTIONS} element={<MyQuestions />} />
          <Route path={browserRoutes.MYANSWERS} element={<MyAnswers />} />
          <Route
            path={`${browserRoutes.QUESTION_DETAILS}/:id`}
            element={<QuestionDetails />}
          />
          <Route path={browserRoutes.WRITE} element={<Write />} />
          <Route path={browserRoutes.SETTINGS} element={<Settings />} />
          <Route path={browserRoutes.USERSLIST} element={<UserList />} />
          <Route path={browserRoutes.TUTORIAL} element={<Tutorial />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;