import React from 'react';
import { connect } from 'react-redux';
import { getDataOnLoad, getLaunchData, getLandData, getAllData } from '../redux/actions/actions';
import Card from './Card';
import Filter from './Filter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearList: [],
      pref: true,
      launch: true,
      land: true,
      year: ''
    };
  }

  componentDidMount() {
    this.props.getDataOnLoad()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data && this.state.pref === true) {
      const yearList = [...new Set(this.props.data.map(item => item.launch_year))]
      this.setState({
        yearList: yearList
      })
    }
    if (prevState.launch !== this.state.launch) {

    }
  }

  handleClick = (e) => {
    const { launch, land, year } = this.state
    this.setState({ pref: false })
    if (e.target.id.includes("launch")) {
      this.setState({ launch: e.target.value })
      if (year !== '') {
        console.log('inside if', year)
        this.props.getAllData(e.target.value, land, year)
      }
      else if (land !== null) {
        this.props.getLandData(e.target.value, land)
      }
      else {
        this.props.getLaunchData(e.target.value)
      }
    }
    else if (e.target.id.includes("land")) {
      this.setState({ land: e.target.value })
      if (year !== '') {
        console.log('land', land)
        this.props.getAllData(launch, e.target.value, year)
      }
      else {
        this.props.getLandData(launch, e.target.value)
      }
    }
    else {
      this.setState({ year: e.target.value })
      this.props.getAllData(launch, land, e.target.value)
    }
  }

  render() {
    const { yearList, year, launch, land} = this.state;
    const cardList = this.props.data && this.props.data.length > 0 ? (<React.Fragment>
      {this.props.data && this.props.data.map((item, index) => (
        <Card
          key={item.flight_number}
          image={item.links.mission_patch_small}
          missionName={`${item.mission_name}#${item.flight_number}`}
          missionId={item.mission_id}
          launchYear={item.launch_year}
          link={item.links.article_link}
          launchSuccess={item.launch_success ? 'true' : 'false'}
          landSuccess={item.rocket.first_stage.cores[0].land_success ? 'true' : 'false'} />
      ))}
    </React.Fragment>) : <h2>No data exists. Please choose any other filter</h2>
    return (
      this.props.data == null ? <h2>Loading....</h2> :
        <>
          <header><h1>SpaceX Launch Programs</h1></header>
          <div className="main-containter">
            {yearList && <Filter yearList={yearList} year={year} launch={launch} land={land} onClick={(e) => this.handleClick(e)} />}

            <section className='card-container'>
              {cardList}
            </section>
          </div>
          <footer><strong>Developed By :</strong> <span>Vineet Dhiman</span></footer>
        </>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
})

const mapDispatchToProps = dispatch => ({
  getDataOnLoad: () => dispatch(getDataOnLoad()),
  getLaunchData: (launch) => dispatch(getLaunchData(launch)),
  getLandData: (launch, land) => dispatch(getLandData(launch, land)),
  getAllData: (launch, land, year) => dispatch(getAllData(launch, land, year)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
