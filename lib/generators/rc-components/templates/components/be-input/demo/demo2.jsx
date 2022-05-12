/**
 * desc: textarea
 */
import React, { forwardRef } from 'react';
import { Form } from 'antd';
import { BeInput } from '@babe0806/components';

function Demo({ form }, ref) {
    const { getFieldDecorator } = form;
    return (
        <Form ref={ref}>
            <Form.Item>
                {getFieldDecorator('memo')(
                    <BeInput.TextArea showCount rows={5} placeholder="textarea" />,
                )}
            </Form.Item>
        </Form>
    );
}

export default Form.create()(forwardRef(Demo));
