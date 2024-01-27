import { PartialType } from "@nestjs/mapped-types";
import { CreateNinjaDTO } from "./create-ninja.dto";


export class UpdateNinjaDTO extends PartialType(CreateNinjaDTO) { }