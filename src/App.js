import './App.css';
import Header from './layout/Header';
import AllQuestions from './components/questions/AllQuestions';
import AskQuestion from './components/questions/AskQuestion';
import Signup from './registration/Signup';
import { Routes, Route } from 'react-router-dom';
import Signin from './registration/Signin';
import { browserRoutes } from './routes/browserRoutes';
import AuthRoutes from './components/authProtectedRoutes/AuthRoutes';
import { Toaster } from 'react-hot-toast';
import MyQuestions from './profile/MyQuestions';
import MyAnswers from './profile/MyAnswers';
import QuestionDetails from './components/questions/QuestionDetails';
import Write from './components/write/Write';
import Settings from './components/settings/Settings';
import ProtectedRoutes from './components/authProtectedRoutes/ProtectedRoutes';
import Knowledge from './components/knowledge/Knowledge';
import KnowledgeDetails from './components/knowledge/KnowledgeDetails';
import NotFound from './components/error/NotFound';
import TopDevelopers from './developers/TopDevelopers';
import Developer from './developer/Developer';

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
          <Route
            path={browserRoutes.SIGNUP}
            element={
              <AuthRoutes redirectLink={browserRoutes.HOME}>
                <Signup />
              </AuthRoutes>
            }
          />
          <Route path={browserRoutes.DEVELOPERS} element={<TopDevelopers />} />
          <Route path='/developers/:userId' element={<Developer />} />
          <Route
            path={browserRoutes.SIGNIN}
            element={
              <AuthRoutes redirectLink={browserRoutes.HOME}>
                <Signin />
              </AuthRoutes>
            }
          />
          <Route
            path={browserRoutes.MYQUESTIONS}
            element={
              <ProtectedRoutes redirectLink={browserRoutes.SIGNIN}>
                <MyQuestions />
              </ProtectedRoutes>
            }
          />
          <Route
            path={browserRoutes.MYANSWERS}
            element={
              <ProtectedRoutes redirectLink={browserRoutes.SIGNIN}>
                <MyAnswers />
              </ProtectedRoutes>
            }
          />
          <Route
            path={`${browserRoutes.QUESTION_DETAILS}/:id`}
            element={<QuestionDetails />}
          />
          <Route
            path={browserRoutes.WRITE}
            element={
              <ProtectedRoutes redirectLink={browserRoutes.SIGNIN}>
                <Write />
              </ProtectedRoutes>
            }
          />
          <Route path={browserRoutes.SETTINGS} element={<Settings />} />
          <Route path={browserRoutes.DEVELOPERS} element={<TopDevelopers />} />
          <Route path={browserRoutes.KNOWLEDGE} element={<Knowledge />} />
          <Route path={`/knowledge/:id`} element={<KnowledgeDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
