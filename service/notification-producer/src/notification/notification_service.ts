import { SqlService } from "../sql/sql_service"

export class NotifcationService {
  constructor() {
    this.sqlService = new SqlService()
  }
  private sqlService: SqlService
}
