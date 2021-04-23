import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './../../components/Header'
import FirstStep from './../../components/FirstStep'
import SecondStep from './../../components/SecondStep'
import ThirdStep from './../../components/ThirdStep'

const AppRouter = () => {
  return (
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/' component={FirstStep} />
            <Route path='/second' component={SecondStep} />
            <Route path='/third' component={ThirdStep} />
          </Switch>
        </div>
      </BrowserRouter>
  )
}

export default AppRouter
