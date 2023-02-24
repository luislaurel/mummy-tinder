require 'rails_helper'

RSpec.describe Cat, type: :model do

    it 'should validate name' do
      cat = Cat.create
      expect(cat.errors[:name]).to_not be_empty
    end
    it 'should validate age' do
      cat = Cat.create
      expect(cat.errors[:age]).to_not be_empty
    end
    it 'should validate location' do
      cat = Cat.create
      expect(cat.errors[:location]).to_not be_empty
    end
    it 'should validate anthem' do
      cat = Cat.create
      expect(cat.errors[:anthem]).to_not be_empty
    end
    it 'should validate movie' do
      cat = Cat.create
      expect(cat.errors[:movie]).to_not be_empty
    end
    it 'should validate enjoys' do
      cat = Cat.create
      expect(cat.errors[:enjoys]).to_not be_empty
    end
    it 'should validate joke' do
      cat = Cat.create
      expect(cat.errors[:joke]).to_not be_empty
    end
    it 'should validate enjoys is minimum 10 characters long ' do
      cat = Cat.create enjoys:'Biking'
      expect(cat.errors[:enjoys]).to_not be_empty
    end
  end