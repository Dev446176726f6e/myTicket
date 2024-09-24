import { Injectable } from "@nestjs/common";
import { CreateLanguageDto } from "./dto/create-language.dto";
import { UpdateLanguageDto } from "./dto/update-language.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Language } from "./model/language.model";

@Injectable()
export class LanguageService {
  constructor(@InjectModel(Language) private languageModel: typeof Language) {}

  async create(createLanguageDto: CreateLanguageDto) {
    const new_lang = await this.languageModel.create(createLanguageDto);
    return new_lang;
  }

  findAll() {
    return this.languageModel.findAll();
  }

  findOne(id: number) {
    return this.languageModel.findByPk(id);
  }

  async update(id: number, updateLanguageDto: UpdateLanguageDto) {
    const updated_lang = await this.languageModel.update(updateLanguageDto, {
      where: { id },
      returning: true,
    });
    return updated_lang[1][0];
  }

  remove(id: number) {
    return this.languageModel.destroy({ where: { id } });
  }
}
