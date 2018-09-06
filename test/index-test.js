/*global describe, it*/


  describe('happyHolidays()', function() {
    it('returns "Happy holidays!"', function() {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })

  describe('happyHolidaysTo(name)', function() {
    it('returns "Happy holidays, ${name}!"', function() {
      expect(happyHolidaysTo('${name}')).toEqual('Happy holidays, ${name}!')
    })
  })

  describe('happyHolidayTo(holiday, name)', function() {
    it('returns "Happy ${holiday}, ${name}!"', function() {
      expect(happyHolidayTo('Independence Day', '${name}')).toEqual('Happy Independence Day, ${nam3}!')
    })
  })

  describe('holidayCountdown(holiday, days)', function() {
    it('returns "It\'s ${days} days until ${holiday}!"', function() {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It\'s 20 days until Mother's Day!")
    })
  })
