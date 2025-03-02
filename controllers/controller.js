const mongoose = require('mongoose');
const model = require("../model/schema")
const joi = require('joi')
const bcrypt = require("bcrypt")
const commonFunction = require("../helper/comman")


module.exports = {

    employeesCreate: async (req, res) => {
        const validationSchema = joi.object({
            name: joi.string().alphanum().max(10).min(3).trim().required(),
            email: joi.string().email().required(),
            password: joi.string().min(6).max(10).required(),
            designation: joi.string().alphanum().max(10).min(3).trim().required(),
            department: joi.string().alphanum().max(10).min(2).trim().required(),
            salary: joi.string().required()
        });
        try {
            // Validate request body
            const validateBody = await validationSchema.validateAsync(req.body);
            const { name, email, designation, password, department, salary } = validateBody;

           
            const employee = await model.findOne({ email, designation });
            if (employee) {
                return res.status(400).json({ message: "Employee already exists" });
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newEmployee = ({ name, email, designation,password: hashedPassword, department, salary });
             await model.create(newEmployee);

            return res.status(201).json({ message: "Employee created successfully", employee: newEmployee });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error", error: error.details || error.message });
        }



    },
    login:async(req, res)=>{
        const validationSchema = joi.object({
            email: joi.string().email().required(),
            password: joi.string().min(6).max(10).required(),
        });
        try {
            const validateBody = await validationSchema.validateAsync(req.body);
            const {email, password}=validateBody;
            const user = await model.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "Email not found,please createEmployees firts" });
            }
           const isPasswordMatch =  bcrypt.compare(password, user.password);
           if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid password" });
           }
           const token =await commonFunction.getToken({ id: user._id });
            return res.status(200).json({ message: "Login successful",  token });

        } catch (error) {
            console.error("Error during login:", error);
            return res.status(500).json({ success: false, msg: "Internal server error" });
        }
    },
    getEmployees: async (req, res) => {
        try {
            const employees = await model.find();
            return res.status(200).json({ success: true, employees });
        } catch (error) {
            console.error("Error fetching employees:", error);
            return res.status(500).json({ success: false, msg: "Internal server error" });
        }
    }











    }




