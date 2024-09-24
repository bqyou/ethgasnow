import { Component, OnInit } from '@angular/core';
import { EthGasService } from './eth-gas.service';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports: [CommonModule, HttpClientModule]
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  gasPrices: any = { SafeGasPrice: 0, ProposeGasPrice: 0, FastGasPrice: 0 }; // Defaults
  countdown: number = 5; // Initial countdown value
  private subscription: Subscription | undefined;

  constructor(private ethGasService: EthGasService) {}

  ngOnInit() {
    this.fetchGasPrices();

    // Set an interval to refresh every 5 seconds
    const timer = interval(1000); // Every second
    this.subscription = timer.subscribe(() => {
      this.countdown--;
      
      if (this.countdown === 0) {
        this.fetchGasPrices();
        this.countdown = 59; // Reset countdown after refresh
      }
    });
  }

  // Fetch gas prices from the service and round them to 2 decimals
  fetchGasPrices() {
    this.ethGasService.getGasPrices().subscribe(data => {
      this.gasPrices.SafeGasPrice = parseFloat(data.result.SafeGasPrice).toFixed(2);
      this.gasPrices.ProposeGasPrice = parseFloat(data.result.ProposeGasPrice).toFixed(2);
      this.gasPrices.FastGasPrice = parseFloat(data.result.FastGasPrice).toFixed(2);
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the timer when the component is destroyed
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}


