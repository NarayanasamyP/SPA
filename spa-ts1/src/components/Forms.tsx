import { Console, log } from 'console';
import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { saveData } from '../Slices/Slice';

interface IcarDataProps {
    data: object[];
    show:boolean;
    target: string;
}

function Forms({ data, show, target }: IcarDataProps) {
    const [formObj, setFormObj] = useState([{}]);
    const dispatch = useDispatch();
   const formRef= useRef(null);
    return (
        <>
        {<span>Brand: {target}</span>}
            <Form ref={formRef}>
                {
                    (data).map((dat:any, index:number) => {
                            return (
                                <>
                                { dat?.name.includes(target) && show  ?
                                    <Form.Group className="mb-3" controlId={"Forms-"+{target}} onSubmit={(arg:any)=>{
                                        debugger;
                                        arg.preventDefault();
                                    }}>
                                        <Form.Label>Model: </Form.Label>
                                        <Form.Control type="text" placeholder={dat?.model}
                                        onChange={(e)=>
                                            setFormObj((prev)=>[...prev, {model: e.target.value}])
                                        }
                                        defaultValue={dat?.model}/>
                                        <Form.Label>Color: </Form.Label>
                                        <Form.Control type="text" placeholder={dat?.color}
                                         onChange={(e)=>
                                            setFormObj((prev)=>[...prev, {color: e.target.value}])
                                        }
                                        defaultValue={dat?.color}/>
                                        <Form.Label>Year of Manufacturing: </Form.Label>
                                        <Form.Control type="text" placeholder={dat?.year}
                                         onChange={(e)=>
                                            setFormObj((prev)=>[...prev, {year: e.target.value}])
                                        }
                                        defaultValue={dat?.year}/>
                                        <Form.Label>Insurance: </Form.Label>
                                        <Form.Control type="text" placeholder={dat?.insurance} 
                                         onChange={(e)=>
                                            setFormObj((prev)=>[...prev, {insurance: e.target.value}])
                                        }
                                        defaultValue={dat?.insurance}/>
                                        <Form.Label>Kms: </Form.Label>
                                        <Form.Control type="text" placeholder={dat?.kms}
                                        onChange={(e)=>
                                            setFormObj((prev)=>[...prev, {kms: e.target.value}])
                                        }
                                        defaultValue={dat?.kms}/>
                                        <Button type='submit' onClick={(arg)=>{
                                            dispatch(()=>saveData());
                                            arg.preventDefault();
                                        }}>Submit</Button>
                                    </Form.Group>: null
                                }
                                </>
                            )
                        // })
                    })
                }


                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group> */}
            </Form>
        </>
    );
}

export default Forms;