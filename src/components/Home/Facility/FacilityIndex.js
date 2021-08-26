import React from 'react'
import Footer from '../HomePage/Footer'
import Header from '../HomePage/Header'
import NoticeHeader from '../HomePage/NoticeHeader'
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 76,
    },
    wrapper: {
        width: 100 + theme.spacing(104),
    },


    paper: {
        zIndex: 1,
        position: 'relative',
        margin: theme.spacing(1),
    },

    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
}));

export default function FacilityIndex() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <>
            <NoticeHeader />
            <Header />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="accordion" className="accordion">
                                <div className="card">
                                    <div className="card-header" >

                                        <div className={classes.root}>
                                            <div className={classes.wrapper}>
                                                <FormControlLabel
                                                    control={<Switch checked={checked} onChange={handleChange} />}
                                                    label="  quis quam ut magna consequat faucibus"
                                                />
                                                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                                                    <Paper elevation={14} className={classes.paper}>
                                                        <p>If you are going to use a passage of embarrassing hidden in the middle of text</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>

                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                    </Paper>
                                                </Slide>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="accordion" className="accordion">
                                <div className="card">
                                    <div className="card-header" >

                                        <div className={classes.root}>
                                            <div className={classes.wrapper}>
                                                <FormControlLabel
                                                    control={<Switch checked={checked} onChange={handleChange} />}
                                                    label="  quis quam ut magna consequat faucibus"
                                                />
                                                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                                                    <Paper elevation={14} className={classes.paper}>
                                                        <p>If you are going to use a passage of embarrassing hidden in the middle of text</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>

                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                    </Paper>
                                                </Slide>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="accordion" className="accordion">
                                <div className="card">
                                    <div className="card-header" >

                                        <div className={classes.root}>
                                            <div className={classes.wrapper}>
                                                <FormControlLabel
                                                    control={<Switch checked={checked} onChange={handleChange} />}
                                                    label="  quis quam ut magna consequat faucibus"
                                                />
                                                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                                                    <Paper elevation={14} className={classes.paper}>
                                                        <p>If you are going to use a passage of embarrassing hidden in the middle of text</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>

                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                    </Paper>
                                                </Slide>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="accordion" className="accordion">
                                <div className="card">
                                    <div className="card-header" >

                                        <div className={classes.root}>
                                            <div className={classes.wrapper}>
                                                <FormControlLabel
                                                    control={<Switch checked={checked} onChange={handleChange} />}
                                                    label="  quis quam ut magna consequat faucibus"
                                                />
                                                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                                                    <Paper elevation={14} className={classes.paper}>
                                                        <p>If you are going to use a passage of embarrassing hidden in the middle of text</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>

                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                    </Paper>
                                                </Slide>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="accordion" className="accordion">
                                <div className="card">
                                    <div className="card-header" >

                                        <div className={classes.root}>
                                            <div className={classes.wrapper}>
                                                <FormControlLabel
                                                    control={<Switch checked={checked} onChange={handleChange} />}
                                                    label="  quis quam ut magna consequat faucibus"
                                                />
                                                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                                                    <Paper elevation={14} className={classes.paper}>
                                                        <p>If you are going to use a passage of embarrassing hidden in the middle of text</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>

                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                    </Paper>
                                                </Slide>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="accordion" className="accordion">
                                <div className="card">
                                    <div className="card-header" >

                                        <div className={classes.root}>
                                            <div className={classes.wrapper}>
                                                <FormControlLabel
                                                    control={<Switch checked={checked} onChange={handleChange} />}
                                                    label="  quis quam ut magna consequat faucibus"
                                                />
                                                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                                                    <Paper elevation={14} className={classes.paper}>
                                                        <p>If you are going to use a passage of embarrassing hidden in the middle of text</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>

                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                    </Paper>
                                                </Slide>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="accordion" className="accordion">
                                <div className="card">
                                    <div className="card-header" >

                                        <div className={classes.root}>
                                            <div className={classes.wrapper}>
                                                <FormControlLabel
                                                    control={<Switch checked={checked} onChange={handleChange} />}
                                                    label="  quis quam ut magna consequat faucibus"
                                                />
                                                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                                                    <Paper elevation={14} className={classes.paper}>
                                                        <p>If you are going to use a passage of embarrassing hidden in the middle of text</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>

                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                    </Paper>
                                                </Slide>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="accordion" className="accordion">
                                <div className="card">
                                    <div className="card-header" >

                                        <div className={classes.root}>
                                            <div className={classes.wrapper}>
                                                <FormControlLabel
                                                    control={<Switch checked={checked} onChange={handleChange} />}
                                                    label="  quis quam ut magna consequat faucibus"
                                                />
                                                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                                                    <Paper elevation={14} className={classes.paper}>
                                                        <p>If you are going to use a passage of embarrassing hidden in the middle of text</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>

                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                    </Paper>
                                                </Slide>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="accordion" className="accordion">
                                <div className="card">
                                    <div className="card-header" >

                                        <div className={classes.root}>
                                            <div className={classes.wrapper}>
                                                <FormControlLabel
                                                    control={<Switch checked={checked} onChange={handleChange} />}
                                                    label="  quis quam ut magna consequat faucibus"
                                                />
                                                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                                                    <Paper elevation={14} className={classes.paper}>
                                                        <p>If you are going to use a passage of embarrassing hidden in the middle of text</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>

                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                    </Paper>
                                                </Slide>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="accordion" className="accordion">
                                <div className="card">
                                    <div className="card-header" >

                                        <div className={classes.root}>
                                            <div className={classes.wrapper}>
                                                <FormControlLabel
                                                    control={<Switch checked={checked} onChange={handleChange} />}
                                                    label="  quis quam ut magna consequat faucibus"
                                                />
                                                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                                                    <Paper elevation={14} className={classes.paper}>
                                                        <p>If you are going to use a passage of embarrassing hidden in the middle of text</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>

                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                    </Paper>
                                                </Slide>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="accordion" className="accordion">
                                <div className="card">
                                    <div className="card-header" >

                                        <div className={classes.root}>
                                            <div className={classes.wrapper}>
                                                <FormControlLabel
                                                    control={<Switch checked={checked} onChange={handleChange} />}
                                                    label="  quis quam ut magna consequat faucibus"
                                                />
                                                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                                                    <Paper elevation={14} className={classes.paper}>
                                                        <p>If you are going to use a passage of embarrassing hidden in the middle of text</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>

                                                        <p>Lorem Ipsu. is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                            when an unknown printer took a galley of type and scrambled it to make a type
                                                            specimen book.</p>
                                                    </Paper>
                                                </Slide>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}



