import { Com.TranslateModule } from './com.translate.module';

describe('Com.TranslateModule', () => {
  let comTranslateModule: Com.TranslateModule;

  beforeEach(() => {
    comTranslateModule = new Com.TranslateModule();
  });

  it('should create an instance', () => {
    expect(comTranslateModule).toBeTruthy();
  });
});
