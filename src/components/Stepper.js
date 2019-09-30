import React from 'react';
import {Link} from "react-router-dom"
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const tempAvatar = 'https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['イメージ画像選択', '会社詳細', '提供詳細'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Create_contena>
                <p>提供方法</p>
                <p>イメージ画像</p>
                <Proimg src={tempAvatar}/><br/>
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/><br/>
                
            </Create_contena>;
    case 1:
      return <Create_contena>
              <p>会社名</p>
              <input placeholder="例:170"/>
            </Create_contena>;
    case 2:
      return <Create_contena>
                <Input_box>
                  <Input_p>プラン名：</Input_p>
                  <Input_place placeholder="名前"/>
                </Input_box>
                <Input_box>
                <Input_p>価格：</Input_p>
                <Input_place placeholder="例:22"/>
                </Input_box>
                <Input_box>
                <Input_p>提供方法：</Input_p>
                <Input_place placeholder="例:22"/>
                </Input_box>
                <Input_box>
                <Input_p>詳細：</Input_p>
                <Input_place placeholder="例:22"/>
                </Input_box><br/>
            </Create_contena>;
    default:
      return 'Unknown step';
  }
}



export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    
    
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>




      <Create_contena>
      <Button_contena>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset} color="primary"  variant="contained">Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </Button_contena>
      </Create_contena>
      </div>
      




    
  );
}


const Proimg = styled.img`
  border-radius: 50%; 
  width:  150px;       
  height: 150px; 
`;
const Create_contena = styled.div`
  text-align: center;
  background-color: #eee;
  width: 80%
  margin: auto;
  padding-top: 50px
  padding-bottom: 50px

`;

const Input_box = styled.div`
  margin: 50px;
  padding: auto;
`;

const Input_place=styled.input`
  display: inline-box;
`;
const Input_p=styled.p`
  display: inline-box;
`;

const Button_contena=styled.p`
text-align: right;
margin-right: 20px;
margin-bottom: -20px;

`;
