import React from 'react'
import { useFieldArray, Controller } from 'react-hook-form'

import { Input, Select, Button, Space, Card } from 'antd'

const { Option } = Select

const Fld = ({ control: ctrl, registerName: path, remove: del, index: i }) => {
  const {
    fields: kids,
    append: add,
    remove: rem
  } 
  = useFieldArray({
    control: ctrl,
    name: `${path}.children`
  })

  return (
    <Card size="small" style={{ marginBottom: '1rem' }}>
      <Space align="start" wrap>
        {/* name input */}
        <Controller
          control={ctrl}
           name={`${path}.name`}
           render={({ field }) => (
            <Input
              placeholder="name"
              {...field}
              style={{ width: 180 }}
            />
          )}
        />

        {/* type select */}

        <Controller
          control={ctrl}
          name={`${path}.type`}
          render={({ field }) => (
            <Select
              {...field}
               style={{ width: 160 }}
              placeholder="type"
               allowClear
            >
              <Option value="String">String</Option>
              <Option value="Number">Number</Option>
              <Option value="Boolean">Boolean</Option>
              <Option value="ObjectId">ObjectId</Option>
              <Option value="Float">Float</Option>
              <Option value="Nested">Nested</Option>
            </Select>
          )
        }
        />

        {/* delete btn */}
        <Button danger onClick={() => del(i)}>
          Delete
        </Button>
      </Space>
             {/* nested area */}
      <Controller
        control={ctrl}
        name={`${path}.type`}
        render={({ field: { value: type } }) =>
          type === 'Nested' && (
            <div style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              {kids.map((fld, idx) => (
                <Fld
                  key= {fld.id}
                  control= {ctrl}
                  registerName= {`${path}.children.${idx}`}
                  index = {idx}
                  remove ={rem}
                />
              )
            )
              }

              <Button
                type="dashed"
                onClick={() => add({ name: '', type: '' })}
                style={{ marginTop: '0.5rem' }}
              >
                + Add Nested
              </Button>
            </div>
          )
        }
      />
    </Card>
  )
}

export default Fld
