import React, { useState, useEffect } from 'react';
import './Grades.scss';

const Gradeaverage = () => {
    const handleEsc = (event) => {
        if (event.keyCode === 27) {
            setclickedClass(null)
        }
    };
    window.addEventListener('keydown', handleEsc);
    const [updated, setUpdated] = useState(false);
    const [clickedClass, setclickedClass] = useState(null);
    const [overall, setOverall] = useState();
    const [classToBeAdded, setClassToBeAdded] = useState('');
    const [newGrade, setNewGrade] = useState(1);
    const [subjects, setSubjects] = useState([]);
    

    useEffect(() => {

        for (let a of subjects) {

            if (a.grades.length > 1) {
                a.average = parseFloat(((a.grades.reduce((a, b) => a + b)) / a.grades.length).toFixed(2))
            }
            else if (a.grades.length === 1) {
                a.average = a.grades[0]
            }
            else {
                a.average = ''
            }
        };

        const arrayOfAverages = [];
        subjects.forEach(subject => subject.average > 0 ? arrayOfAverages.push(subject.average) : 0);
        let sum = 0;
        arrayOfAverages.forEach(a => sum = sum + a);
        setOverall(arrayOfAverages.length > 0 ? (sum / arrayOfAverages.length).toFixed(2) : '---');
        if (updated === true) {
            setUpdated(false);
            setNewGrade(1)
            setSubjects(subjects);
        };
    });

    const addGrade = (e) => {
        e.preventDefault();
        let updated = subjects;
        updated[clickedClass].grades.push(parseInt(newGrade));
        setUpdated(true);
    }

    const deleteGrade = (index) => {
        let updated = subjects;
        updated[clickedClass].grades.splice(index, 1);
        setSubjects(subjects);
        setUpdated(true);
    }


    const addClass = (e) => {
        e.preventDefault()
        const newClass = {
            name: classToBeAdded,
            grades: []
        }
        if (classToBeAdded !== '') {
            setSubjects(prevArray => [...prevArray, newClass]);
        }
        setClassToBeAdded('')
    }

    const settingClassToBeAdded = (e) => {
        setClassToBeAdded(e.target.value);
    }
    const deleteClass = (index, e) => {
        e.stopPropagation();
        var answer = window.confirm("Are you sure you want to delete this class?")
        if (answer) {
            let news = subjects;
            news.splice(index, 1)
            setUpdated(true)
        }
        else {
        }
    }
    return (

        <div className='metronome'>

            <h1 className='overall'>YOUR AVERAGE FROM  <br /> ALL SUBJECTS IS:  <br /> <br /> <p>{overall}</p></h1>

            {clickedClass != null ?
                //  MODAL WITH GRADES 
                <div className='modal-container'>
                    <div onClick={() => setclickedClass(null)} className='modal-back'></div>
                    <div className='modal'>
                        <button className='closemodal' onClick={() => setclickedClass(null)}>×</button>
                        <form onSubmit={(e) => addGrade(e)}>
                            <label>
                                <h1>{subjects[clickedClass].name}</h1>
                                CHOOSE GRADE:
                               <select value={newGrade} onChange={(e) => setNewGrade(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </label>
                            <input type="submit" value="ADD GRADE" />
                        </form>
                        <div className='grade-container'>
                            {subjects[clickedClass].grades.map((a, index) => <li className='grade'>{a}<button onClick={() => deleteGrade(index)} className='delete-grade'>X</button></li>)}
                        </div>
                    </div>
                </div>
                : ''}
            {/* ADDING NEW CLASSES FORM */}
            <div className='add-class'>
                <form className='class-add-form' onSubmit={(e) => addClass(e)}>
                    <div className='input-container'>
                        <input placeholder='ENTER CLASS NAME:' className='class-input' type="text" value={classToBeAdded} onChange={(e) => settingClassToBeAdded(e)} />
                        <input className='class-add' type="submit" value="+" />
                    </div>
                </form>
            </div>
            {/* CONTAINER OF ALL CLASSES */}
            <ul>{subjects.length > 0 ? subjects.map((subject, index) =>
                <div className='subject-div' onClick={() => setclickedClass(index)}>
                    <button onClick={(e) => deleteClass(index, e)} className='delete-class'>X</button>
                    <h1 >{subject.name} <br />avg.</h1>
                    <li className='subject'>
                        {subject.grades.length >= 1 ? ((subject.grades.reduce((a, b) => a + b)) / subject.grades.length).toFixed(2) : '---'}
                    </li>
                </div>) : <div className='no-classes'>NO CLASSES ADDED</div>}
            </ul>
        </div>
    )
}

export default Gradeaverage

