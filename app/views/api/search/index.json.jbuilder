
  @results.each do |result|
    json.set! result.id do
      json.result result
    end
  end
