import React, { useState } from "react";
import axios from "axios";

import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { SaveOutlined } from "@ant-design/icons";

export interface IValues {
  teamid: string;
  organizationid: string;
  businessunitid: string;
  name: string;
  description: string;
  createdon: string;
  modifiedon: string;
  createdby: string;
  modifiedby: string;
  isdefault: boolean;
  administratorid: string;
  queueid: string;
  teamtype: number;
  teamtemplateid: string;
  regardingobjecttypecode: number;
  manager: string;
  salespurchasemanager: string;
  id: number;
  wegedetailaccount: string;
  poursantdetailaccount: string;
  subsidiary: string;
  wegefactorsdetailaccount: string;
  poursantfactorsdetailaccount: string;
  unitmanager: string;
  teampercentage: number;
  goal: string;
  usercount: number;
  newteamtype: number;
}

export interface IFormState {
  [key: string]: any;
  values: IValues[];
  submitSuccess: boolean;
  loading: boolean;
}

const defaultValues: IValues = {
  teamid: "",
  organizationid: "",
  businessunitid: "",
  name: "",
  description: "",
  createdon: "",
  modifiedon: "",
  createdby: "",
  modifiedby: "",
  isdefault: false,
  administratorid: "",
  queueid: "",
  teamtype: 3,
  teamtemplateid: "",
  regardingobjecttypecode: 2,
  manager: "",
  salespurchasemanager: "",
  id: 700,
  wegedetailaccount: "",
  poursantdetailaccount: "",
  subsidiary: "",
  wegefactorsdetailaccount: "",
  poursantfactorsdetailaccount: "",
  unitmanager: "",
  teampercentage: 0,
  goal: "",
  usercount: 1,
  newteamtype: 1000000,
};

export default function AddTeam() {
  const [values, setValues] = useState(defaultValues as IValues);

  const handleChange = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.persist();
    axios
      .post(
        `http://127.0.0.1:8000/teams/`,
        { values },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then(() => console.log("Done"));
  };

  return (
    <>
      <Form layout="vertical">
        {/* Row 1 */}
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="Team ID" colon={false}>
              <Input
                placeholder="e.g. C4A85000-9103-E611-80E5-000C29F57F35"
                defaultValue={values.teamid}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Organization ID" colon={false}>
              <Input
                placeholder="e.g. DECF85E3-6DA4-E411-80B7-000C29F57F35"
                defaultValue={values.organizationid}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Business unit ID" colon={false}>
              <Input
                placeholder="e.g. 26CBE439-6EA4-E411-80B7-000C29F57F35"
                defaultValue={values.businessunitid}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 1 end */}

        {/* Row 2 */}
        <Row gutter={20}>
          <Col span={5}>
            <Form.Item label="Name" colon={false}>
              <Input
                placeholder="e.g. BI Team"
                defaultValue={values.name}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Description" colon={false}>
              <Input
                placeholder="e.g. Business Intelligence Team"
                defaultValue={values.description}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Created on" colon={false}>
              <Input
                placeholder="e.g. 2021-12-26 05:24:55"
                defaultValue={values.createdon}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Modified on" colon={false}>
              <Input
                placeholder="e.g. 2021-12-26 05:24:55"
                defaultValue={values.modifiedon}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 2 end */}

        {/* Row 3 */}
        <Row gutter={20}>
          <Col span={5}>
            <Form.Item label="Created by" colon={false}>
              <Input
                placeholder="e.g. Operator"
                defaultValue={values.createdby}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Modified by" colon={false}>
              <Input
                placeholder="e.g. Manager"
                defaultValue={values.modifiedby}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="is default" colon={false}>
              <Checkbox onChange={handleChange}>is default</Checkbox>
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Administrator ID" colon={false}>
              <Input
                placeholder="e.g. 26CBE439-6EA4-E411-80B5-000C29F27F35"
                defaultValue={values.administratorid}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 3 end */}

        {/* Row 4 */}
        <Row gutter={20}>
          <Col span={5}>
            <Form.Item label="Queue ID" colon={false}>
              <Input
                placeholder="e.g. 26CBE439-6EA4-E410-80B5-000C29F27F23"
                defaultValue={values.queueid}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Team type" colon={false}>
              <Input
                placeholder="e.g. 0"
                defaultValue={values.teamtype}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Team template ID" colon={false}>
              <Input
                placeholder="e.g. 26CBE439-6EA4-E411-80B5-000C29F27F20"
                defaultValue={values.teamtemplateid}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Regarding object type code" colon={false}>
              <Input
                placeholder="e.g. 0"
                defaultValue={values.regardingobjecttypecode}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 4 end */}

        {/* Row 5 */}
        <Row gutter={20}>
          <Col span={5}>
            <Form.Item label="Manager" colon={false}>
              <Input
                placeholder="e.g. D35DD4A6-1D46-E811-812C-000C19F57F52"
                defaultValue={values.manager}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Sales purchase manager" colon={false}>
              <Input
                placeholder="e.g. A6422B40-4CA4-E411-80B4-000C14F57C20"
                defaultValue={values.salespurchasemanager}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="ID" colon={false}>
              <Input
                placeholder="e.g. 145"
                defaultValue={values.id}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Wege detail account" colon={false}>
              <Input
                placeholder="e.g. 3AAFD04B-8E55-EB10-9950-005036B2E320"
                defaultValue={values.wegedetailaccount}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 5 end */}

        {/* Row 6 */}
        <Row gutter={20}>
          <Col span={5}>
            <Form.Item label="Poursant detail account" colon={false}>
              <Input
                placeholder="e.g. 3BAFD04A-8E55-EF10-4050-005036B2E322"
                defaultValue={values.poursantdetailaccount}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Subsidiary" colon={false}>
              <Input
                placeholder="e.g. 4FAFD04B-4E55-EB10-5050-005036B2E132"
                defaultValue={values.subsidiary}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Wege factors detail account" colon={false}>
              <Input
                placeholder="e.g. 4FAFD04B-4E55-EB10-5050-005036B2E132"
                defaultValue={values.wegefactorsdetailaccount}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Poursant factors detail account" colon={false}>
              <Input
                placeholder="e.g. 3AAFD04B-8E55-EB10-9950-265036B2E312"
                defaultValue={values.poursantfactorsdetailaccount}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 6 end */}

        {/* Row 7 */}
        <Row gutter={35}>
          <Col span={5}>
            <Form.Item label="Unit manager" colon={false}>
              <Input
                placeholder="e.g. DF1B1516-2BA4-E411-80B7-000C29F57F35"
                defaultValue={values.unitmanager}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Team percentage" colon={false}>
              <Input
                placeholder="e.g. 4FAFD04B-4E55-EB10-5050-005036B2E132"
                defaultValue={values.teampercentage}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Goal" colon={false}>
              <Input
                placeholder="e.g. 4FAFD04B-4E55-EB10-5050-005036B2E132"
                defaultValue={values.goal}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="User count" colon={false}>
              <Input
                placeholder="e.g. 4FAFD04B-4E55-EB10-5050-005036B2E132"
                defaultValue={values.usercount}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="New team type" colon={false}>
              <Input
                placeholder="e.g. 100000000"
                defaultValue={values.newteamtype}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
        {/* Row 7 end */}

        {/* Submit button */}
        <Row gutter={5}>
          <Col span={5}>
            <Button
              onClick={handleSubmit}
              type="primary"
              icon={<SaveOutlined />}
            />
          </Col>
        </Row>
        {/* Submit button end */}
      </Form>
    </>
  );
}
