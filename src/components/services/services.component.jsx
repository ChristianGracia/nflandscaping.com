import React from 'react';
import { Card } from 'react-bootstrap';
import './services.styles.scss';
import Fade from 'react-reveal/Fade';

const Services = () => {
  return (
    <Fade top cascade>
      <div className='services-container'>
        <Card className='menu-item'>
          <Card.Img
            className='background-image'
            variant='top'
            src={require('../../assets/demolition.jpg')}
          />
          <Card.Body>
            <Card.Title>
              Demolition{' '}
              <i className='fas fa-house-damage' style={{ color: 'black' }}></i>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className='menu-item'>
          <Card.Img
            className='background-image'
            variant='top'
            src={require('../../assets/landscaping-service.jpg')}
          />
          <Card.Body>
            <Card.Title>
              Full Landscaping Services{' '}
              <i className='fas fa-leaf' style={{ color: 'green' }}></i>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className='menu-item' style={{}}>
          <Card.Img
            className='background-image'
            variant='top'
            src={require('../../assets/property-management.jpg')}
          />
          <Card.Body style={{}}>
            <Card.Title>
              Property Management{' '}
              <i
                className='fas fa-circle-notch fa-spin'
                style={{ color: 'red' }}
              ></i>
            </Card.Title>
            <Card.Text style={{}}></Card.Text>
          </Card.Body>
        </Card>

        <Card className='menu-item' style={{}}>
          <Card.Img
            className='background-image'
            variant='top'
            src={require('../../assets/snow-removal.jpg')}
          />
          <Card.Body>
            <Card.Title>
              Snow Removal{' '}
              <i className='far fa-snowflake' style={{ color: '#A5F2F3' }}></i>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>

        <Card className='menu-item' style={{}}>
          <Card.Img
            className='background-image'
            variant='top'
            src={require('../../assets/trash.jpg')}
          />
          <Card.Body>
            <Card.Title>
              Trash Removal / Estate Cleanout{' '}
              <i className='fas fa-trash-alt' style={{ color: '#77584C' }}></i>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className='menu-item' style={{}}>
          <Card.Img
            className='background-image'
            variant='top'
            src={require('../../assets/bobcat.jpg')}
          />
          <Card.Body>
            <Card.Title>
              Bobcat Services{' '}
              <i
                className='fas fa-truck-loading'
                style={{ color: '#F8D200' }}
              ></i>{' '}
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className='menu-item' style={{}}>
          <Card.Img
            className='background-image'
            variant='top'
            src={require('../../assets/powerwashing.jpg')}
          />
          <Card.Body>
            <Card.Title>
              Power Washing{' '}
              <i className='fas fa-bath' style={{ color: '#C2C5CC' }}></i>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className='menu-item' style={{}}>
          <Card.Img
            className='background-image'
            variant='top'
            src={require('../../assets/consulting.jpg')}
          />
          <Card.Body>
            <Card.Title>
              Consulting <i className='fas fa-user-ninja'></i>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className='menu-item' style={{}}>
          <Card.Img
            className='background-image'
            variant='top'
            src={require('../../assets/irrigation.jpg')}
          />
          <Card.Body>
            <Card.Title>
              Irrigation{' '}
              <i className='fas fa-eye-dropper' style={{ color: 'blue' }}></i>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className='menu-item' style={{}}>
          <Card.Img
            className='background-image'
            variant='top'
            src={require('../../assets/fencing.jpg')}
          />
          <Card.Body>
            <Card.Title>
              Fencing{' '}
              <i
                className='fas fa-grip-lines-vertical'
                style={{ color: '#C99E7D' }}
              ></i>
              <i
                className='fas fa-grip-lines-vertical'
                style={{ color: '#C99E7D' }}
              ></i>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card className='menu-item' style={{}}>
          <Card.Img
            className='background-image'
            variant='top'
            src={require('../../assets/home-improvement.jpeg')}
          />
          <Card.Body>
            <Card.Title>
              Home Improvement{' '}
              <i className='fas fa-hammer' style={{ color: '#848589' }}></i>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Fade>
  );
};

export default Services;
