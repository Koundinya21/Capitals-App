// import {Component} from 'react'
import {useState} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
// class Capitals extends Component {
//   state = {
//     activeCapitalsId: countryAndCapitalsList[0].id,
//   }

//   onChangingCapital = event => {
//     this.setState({activeCapitalsId: event.target.value})
//   }

//   getCountry = () => {
//     const {activeCapitalsId} = this.state

//     const activeCountryAndCapital = countryAndCapitalsList.find(
//       eachCapital => eachCapital.id === activeCapitalsId,
//     )
//     return activeCountryAndCapital.country
//   }

//   render() {
//     const {activeCapitalsId} = this.state
//     const country = this.getCountry()

//     return (
//       <div className="app-container">
//         <div className="capitals-container">
//           <h1 className="heading">Countries And Capitals</h1>
//           <div className="question-container">
//             <select
//               className="capital-select"
//               onChange={this.onChangingCapital}
//               value={activeCapitalsId}
//             >
//               {countryAndCapitalsList.map(eachCapital => (
//                 <option
//                   key={eachCapital.id}
//                   value={eachCapital.id}
//                   className="option"
//                 >
//                   {eachCapital.capitalDisplayText}
//                 </option>
//               ))}
//             </select>
//             <p className="question">is capital of which country?</p>
//           </div>
//           <p className="country">{country}</p>
//         </div>
//       </div>
//     )
//   }
// }

// class Capitals extends Component {
//   state = {
//     activeCountryId: countryAndCapitalsList[0].id,
//   }

//   onChangeCapital = event => {
//     this.setState({activeCountryId: event.target.value})
//   }

//   getCountry = () => {
//     const {activeCountryId} = this.state
//     const countryId = countryAndCapitalsList.find(
//       each => each.id === activeCountryId,
//     )

//     return countryId.country
//   }

//   render() {
//     const {activeCountryId} = this.state
//     const country = this.getCountry()
//     return (
//       <div className="app-container">
//         <div className="capitals-container">
//           <h1 className="heading">Countries and Capitals</h1>
//           <div className="question-container">
//             <select
//               className="capital-select"
//               value={activeCountryId}
//               onChange={this.onChangeCapital}
//             >
//               {countryAndCapitalsList.map(eachCapital => (
//                 <option
//                   key={eachCapital.id}
//                   value={eachCapital.id}
//                   className="options"
//                 >
//                   {eachCapital.capitalDisplayText}
//                 </option>
//               ))}
//             </select>
//             <p className="question">is capital of which country?</p>
//           </div>
//           <p className="country">{country}</p>
//         </div>
//       </div>
//     )
//   }
// }

const Capitals = () => {
  const [activeCountryId, setActiveCountryId] = useState(
    countryAndCapitalsList[0].id,
  )
  const onChangeOfCapital = event => {
    setActiveCountryId(event.target.value)
  }

  const getCountry = () => {
    const countryId = countryAndCapitalsList.find(
      each => each.id === activeCountryId,
    )

    return countryId.country
  }

  const country = getCountry()
  return (
    <div className="app-container">
      <div className="capitals-container">
        <h1 className="heading">Countries and Capitals</h1>
        <div className="question-container">
          <select
            className="capital-select"
            value={activeCountryId}
            onChange={onChangeOfCapital}
          >
            {countryAndCapitalsList.map(each => (
              <option key={each.id} value={each.id} className="options">
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <p className="question">is capital of which country?</p>
        </div>
        <p className="country">{country}</p>
      </div>
    </div>
  )
}
export default Capitals
