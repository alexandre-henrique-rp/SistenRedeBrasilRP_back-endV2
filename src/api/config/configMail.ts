class ConfigMail {
  public host: string = process.env.EMAIL_HOST;
  public port: string = process.env.EMAIL_PORT;
  public user: string = process.env.EMAIL_USER;
  public password: string = process.env.EMAIL_PASSWORD;
}

export default new ConfigMail();
