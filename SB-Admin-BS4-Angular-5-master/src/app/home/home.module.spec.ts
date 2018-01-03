import { HomeModule } from './home.module';

describe('NotFoundModule', () => {
  let notFoundModule: HomeModule;

  beforeEach(() => {
    notFoundModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(notFoundModule).toBeTruthy();
  });
});
