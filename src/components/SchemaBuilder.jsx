import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { Card, Row, Col, Button } from 'antd'
import Field from './Field'

const Builder = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { arr: [] },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'arr',
  })

  const watchedFields = watch('arr')

  const generateSchema = (arr) => {
    const schema = {}
    arr.forEach((field) => {
      if (!field.name) return
      if (field.type === 'Nested') {
        schema[field.name] = generateSchema(field.children || [])
      } else {
        schema[field.name] = field.type
      }
    })
    return schema
  }

  const onSubmit = (data) => {
    const schema = generateSchema(data.arr)
    alert(JSON.stringify(schema, null, 2))
  }

  return (
    <Row gutter={[16, 16]} wrap>
      <Col xs={24} md={12}>
        <Card title="Schema Builder">
          {fields.map((field, index) => (
            <Field
              key={field.id}
              control={control}
              registerName={`arr.${index}`}
              index={index}
              remove={remove}
            />
          ))}

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

      <Col xs={24} md={12}>
        <Card title="Live JSON Preview">
          <div style={{ overflowX: 'auto', maxHeight: '400px' }}>
            <pre>{JSON.stringify(generateSchema(watchedFields), null, 2)}</pre>
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default Builder
