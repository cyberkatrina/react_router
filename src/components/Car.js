import React from 'react'
import cars from '../cars.json'
import {useParams} from 'react-router-dom'

// import MUI components here //
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';


const Car = (props) => {
    const {id} = useParams()
    const car = cars.find((car) => car.id == id)
    console.log(car)

    return (
        <div>
            <Container maxWidth="sm" >
                <Paper elevation={1} style={{padding: '50px', marginTop: '50px'}}>
                    <h1>{car.Name}</h1>
                    {Object.keys(car).map((key, index) => {
                        return(
                            <Chip key={index} label={[key+ ': ' + car[key]]}/>
                        )
                    })}
                </Paper>
            </Container>
        </div>
    )
}

export default Car