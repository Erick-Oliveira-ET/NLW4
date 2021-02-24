import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveyController {
  async create(req: Request, res: Response) {
    const { title, description } = req.body;

    const surveyRepository = getCustomRepository(SurveysRepository);

    const survey = surveyRepository.create({ title, description });

    try {
      await surveyRepository.save(survey);
      return res.status(201).json(survey);
    } catch (error) {
      console.error(error);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const surveyRepository = getCustomRepository(SurveysRepository);
      const response = await surveyRepository.find();
      return res.status(201).send(response);
    } catch (error) {
      return res.status(500).json({
        message: "Ocorreu um erro inesperado",
        description: error,
      });
    }
  }
}

export default SurveyController;
