import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { Card, Row, Col, Button } from 'antd';
import Field from './Field';


//  Main builder component to create a JSON schema visually.
 
const Builder = () => {
  const {
    control,
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      arr: [],
    },
  });

  const {
    fields,
    append,
    remove,
  } 
  = useFieldArray({
    control,
    name: 'arr',
  });

  const watchedFields = watch('arr');

  
   // Recursively generate schema object from the form state.
   
  const generateSchema = (fieldArray) => {
    const schema = {};

    fieldArray.forEach((field) => {
      if (!field.name) return;         // skip empty field

      if (field.type === 'Nested') {
        schema[field.name] = generateSchema(field.children || []);
      } 
      else {
        schema[field.name] = field.type;
      }
    }
  );

    return schema;
  };

  
  //   Handle  form submission
  
  const onSubmit = (formData) => {
    const schema = generateSchema(formData.arr);
    console.log('Generated Schema:', schema);
    alert(JSON.stringify(schema, null, 2));
  };

  return (
    <Row gutter={24}>  
      <Col span={12}>
         <Card title="Schema Builder">
          {fields.map((field, index) => (
            <Field
              key = {field.id}
              control = {control}
              registerName  = {`arr.${index}`}
              index= {index}
              remove= {remove}
              nestIndex= ""
            />
          )
        )
          }

          <div style={{ marginTop: '1rem' }}>
            <Button
              type="primary"
              onClick={() => append({ name: '', type: '' })}
            >
              + Add Field
            </Button>

            <Button
              type="default"
              onClick={handleSubmit(onSubmit)}
              style={{ marginLeft: '1rem' }}
            >
              Submit
            </Button>
          </div>
        </Card>
      </Col>

      <Col span={12}>
        <Card title="Live Preview">
            <pre>{JSON.stringify(generateSchema(watchedFields), null, 2)}</pre>
            </Card>
      </Col>
    </Row>
  );
};

export default Builder;
